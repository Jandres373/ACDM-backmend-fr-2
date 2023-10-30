import React from 'react'; // Asegúrate de importar React
import { Button } from "@/components/ui/button"

function OptionBar() {
  return (
    <div className="fixed top-[50%] translate-y-[-50%] right-5 flex flex-col items-center p-2 rounded-full bg-blue-500 max-w-max">
      {/* Grupo 1 */}
      <div className="mb-4">
        <Button
          className="rounded-full text-zinc-100 hover:bg-gray-600 hover:text-zinc-100"
          size="icon"
          variant="ghost"
        >
          <svg
            className="w-6 h-6 stroke-1 "
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
          </svg>
          <span className="sr-only">Create a comment</span>
        </Button>
      </div>

      {/* Grupo 2 */}
      <div className="mb-4">
        <div className="relative">
          <Button
            className="rounded-full text-zinc-100 hover:bg-gray-600 hover:text-zinc-100"
            size="icon"
            variant="ghost"
          >
            <svg
              className="w-6 h-6 stroke-1 "
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
              <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
            </svg>
            <span className="sr-only">Open inbox</span>
            <span className="absolute block w-2 h-2 bg-blue-500 rounded-full top-2 right-2" />
          </Button>
        </div>
      </div>

      {/* Grupo 3 */}
      <div className="mb-4">
        <Button
          className="rounded-full text-zinc-100 hover:bg-gray-600 hover:text-zinc-100"
          size="icon"
          variant="ghost"
        >
          <svg
            className="w-6 h-6 stroke-1 "
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          <span className="sr-only">Edit</span>
        </Button>
      </div>

      {/* Grupo 4 */}
      <div>
        <Button
          className="rounded-full text-zinc-100 hover:bg-gray-600 hover:text-zinc-100"
          size="icon"
          variant="ghost"
        >
          <svg
            className="w-6 h-6 stroke-1 "
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Open menu</span>
        </Button>
      </div>
    </div>
  )
}
export default OptionBar