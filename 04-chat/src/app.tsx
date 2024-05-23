import * as ScrollArea from '@radix-ui/react-scroll-area'
import { SendHorizonal, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Message } from './components/message'
import { messages } from './data/messages'

export default function App() {
  const [text, setText] = useState('')
  const chatRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [chatRef])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(text)

    setText('')
  }

  return (
    <main className="h-[100dvh] overflow-hidden py-6">
      <div className="mx-auto flex h-full max-w-3xl flex-col">
        <div className="space-y-6 px-8 pb-6">
          <div className="flex items-center gap-3">
            <img
              src="https://github.com/rodrigoqueiroz12.png"
              alt=""
              className="size-12 rounded-full"
            />
            <div className="inline-flex flex-col items-start gap-1">
              <h1 className="font-bold leading-none">Rodrigo Queiroz</h1>
              <span className="text-xs leading-none text-emerald-500">
                <div className="mr-1 inline-block size-2 rounded-full bg-emerald-500" />
                Online
              </span>
            </div>

            <button type="button" className="ml-auto">
              <X className="size-5" />
            </button>
          </div>

          <span className="block text-center text-xs leading-none">
            Hoje 11:30
          </span>
        </div>

        <ScrollArea.Root
          className="flex-1 overflow-hidden px-8"
          type="scroll"
          scrollHideDelay={1000}
        >
          <ScrollArea.Viewport className="h-full space-y-8" ref={chatRef}>
            {messages.map(({ id, sender, sendAt }) => (
              <Message id={id} sender={sender} sendAt={sendAt} key={id} />
            ))}
          </ScrollArea.Viewport>

          <ScrollArea.Scrollbar
            className="flex touch-none select-none rounded-full bg-background/10 p-0.5 transition-colors data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-emerald-500/25 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
          </ScrollArea.Scrollbar>

          <ScrollArea.Corner className="bg-emerald-500/25" />
        </ScrollArea.Root>

        <div className="px-8 pt-6">
          <form
            action="#"
            className="flex items-center justify-between gap-2.5 rounded-full bg-input px-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Digite sua mensagem"
              className="w-full bg-transparent py-5 outline-none"
              inputMode="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button type="submit">
              <SendHorizonal className="size-6" />
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
