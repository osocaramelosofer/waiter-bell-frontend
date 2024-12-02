/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { toast } from 'sonner'

interface Table {
  tableId: string
  message: string
  needService: boolean
}

let socket: any
const tables: Table[] = [
  {
    tableId: '1',
    message: `user has joined table 1`,
    needService: false
  },
  {
    tableId: '2',
    message: `user has joined table 2`,
    needService: false
  },
  {
    tableId: '3',
    message: `user has joined table 3`,
    needService: false
  },
  {
    tableId: '4',
    message: `user has joined table 4`,
    needService: false
  },
  {
    tableId: '5',
    message: `user has joined table 5`,
    needService: false
  },
  {
    tableId: '6',
    message: `user has joined table 6`,
    needService: false
  },
  {
    tableId: '7',
    message: `user has joined table 7`,
    needService: false
  },
  {
    tableId: '8',
    message: `user has joined table 8`,
    needService: false
  }
]

export default function AdminPage() {
  const [tablesState, setTablesState] = useState<Table[]>(tables)
  useEffect(() => {
    // Inicializa el socket solo una vez
    // Selecciona el protocolo correcto según el entorno
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws'
    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_URL || 'www.patioholbox.com'

    socket = io(`${protocol}://${backendUrl}`)
    console.log('enviroment:', process.env.NEXT_PUBLIC_BACKEND_URL)

    // Listener para 'user arrived'
    socket.on('user arrived', (msg: string) => {
      console.log('user arrived: ', msg)
      const tableData: Table = JSON.parse(msg)
      const { tableId } = tableData
      const clientArrivedMsg = `Un cliente ha llegado a la mesa ${tableId}`
      toast(clientArrivedMsg, {
        action: {
          label: 'Undo',
          onClick: () => console.log('X')
        }
      })
      setTablesState((prevState) => {
        return prevState.map((table) =>
          table.tableId === tableData.tableId
            ? { ...table, needService: true }
            : { ...table }
        )
      })
      // Aquí puedes actualizar el estado o realizar otras acciones en la página del admin
    })

    // Cleanup al desmontar el componente
    return () => {
      socket.off('user arrived') // Remueve el listener específico
      socket.disconnect()
    }
  }, [])

  return (
    <section className="bg-neutral-800 h-screen py-20">
      <h1 className="text-center text-5xl uppercase font-bold mb-10 text-white">
        Mesas
      </h1>

      <div className="lg:mx-56 md:mx-32 mx-10 ">
        <div className="flex gap-x-4 gap-y-6 flex-wrap">
          {tablesState.map(({ tableId, needService }) => {
            return (
              <div
                key={tableId}
                className="bg-foreground-700 rounded-full p-10 relative flex size-32 justify-center items-center"
              >
                <div className="absolute right-0 top-0">
                  <span
                    className={`relative flex h-6 w-6 ${needService ? 'block' : 'hidden'}`}
                  >
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
                  </span>
                </div>

                <button
                  className="bg-foreground-600 rounded-full font-bold text-black size-10 grid place-content-center"
                  onClick={() => {
                    setTablesState((prevState) => {
                      return prevState.map((table) =>
                        table.tableId === tableId
                          ? { ...table, needService: false }
                          : table
                      )
                    })
                  }}
                >
                  {tableId}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
