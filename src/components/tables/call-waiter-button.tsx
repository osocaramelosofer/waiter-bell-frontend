'use client'

import { Button } from '@nextui-org/react'
import { useEffect } from 'react'
import { PiCallBellFill } from 'react-icons/pi'

import { io } from 'socket.io-client'
import { toast } from 'sonner'

interface Props {
  tableId: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let socket: any

export function CallWaiterButton({ tableId }: Props) {
  // Conectar al servidor solo una vez
  useEffect(() => {
    socket = io('ws://localhost:3000') // Asegúrate de que esta URL sea correcta.

    // socket.on('connect', () => {
    //   console.log('Connected to server')
    // })

    return () => {
      socket.disconnect()
    }
  }, [])

  // Emitir el evento al hacer clic
  const onClickTable = () => {
    const tableData = {
      tableId: tableId,
      message: `user has joined table ${tableId}`,
      needService: true
    }
    socket.emit('join table', JSON.stringify(tableData))
    toast('El mesero esta en camino 🏃‍♂️', {
      action: {
        label: 'X',
        onClick: () => console.log('')
      }
    })
  }

  return (
    <>
      <Button
        onClick={onClickTable}
        color="primary"
        className="h-28 w-28 rounded-full"
      >
        <div className="flex flex-col items-center">
          <PiCallBellFill size={40} />
        </div>
      </Button>
    </>
  )
}
