'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */
// components/ThemeToggle.js
import { useTheme } from '@/hooks/useTheme'
import { Switch } from '@nextui-org/react' // Usando NextUI para el botón
import { FaMoon } from 'react-icons/fa'
import { PiSunDimFill } from 'react-icons/pi'

const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Switch
      onValueChange={toggleTheme}
      defaultSelected
      size="lg"
      color="default"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <PiSunDimFill className={className} />
        ) : (
          <FaMoon className={className} />
        )
      }
      classNames={{
        wrapper: 'bg-foreground-200'
      }}
    ></Switch>
  )
}

export default SwitchTheme
