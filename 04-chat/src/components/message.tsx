import { format } from 'date-fns'

import { cn } from '../utils/cn'

interface MessageProps {
  id: number
  sender: {
    type: string
    name: string
    message: string
  }
  sendAt: string
}

export function Message({ id, sender, sendAt }: MessageProps) {
  return (
    <div
      className={cn('flex flex-col items-start gap-2.5', {
        'items-start': sender.type === 'contact',
        'items-end': sender.type === 'me',
      })}
      key={id}
    >
      <span className="text-xs leading-none">
        {sender.type === 'contact' ? sender.name : 'Você'} -{' '}
        {format(sendAt, 'HH:mm')}
      </span>

      <div
        className={cn(
          'max-w-[60%] rounded-bl-lg rounded-br-lg rounded-tr-lg p-[0.875rem] text-xs leading-normal',
          {
            'bg-contact': sender.type === 'contact',
            'bg-emerald-600': sender.type === 'me',
          },
        )}
      >
        {sender.message}
      </div>
    </div>
  )
}
