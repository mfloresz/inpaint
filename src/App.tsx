/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { ArrowLeftIcon, InformationCircleIcon } from '@heroicons/react/outline'
import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import Button from './components/Button'
import FileSelect from './components/FileSelect'
import Modal from './components/Modal'
import Editor from './Editor'
import { resizeImageFile } from './utils'
import Progress from './components/Progress'
import { downloadModel } from './adapters/cache'
import * as m from './paraglide/messages'
import {
  languageTag,
  onSetLanguageTag,
  setLanguageTag,
} from './paraglide/runtime'

function App() {
  const [file, setFile] = useState<File>()
  const [stateLanguageTag, setStateLanguageTag] = useState<'en' | 'es'>('en')

  onSetLanguageTag(() => setStateLanguageTag(languageTag() as any))

  const [showAbout, setShowAbout] = useState(false)
  const modalRef = useRef(null)

  const [downloadProgress, setDownloadProgress] = useState(100)

  useEffect(() => {
    downloadModel('inpaint', setDownloadProgress)
  }, [])

  useClickAway(modalRef, () => {
    setShowAbout(false)
  })

  return (
    <div className="min-h-full flex flex-col bg-background text-foreground">
      <header
        className={[
          'z-10 bg-card/80 backdrop-blur-md border-b border-border',
          'flex flex-row items-center md:justify-between h-14 sticky top-0 shadow-sm',
        ].join(' ')}
      >
        <Button
          className={[
            file ? '' : 'opacity-50 pointer-events-none',
            'pl-1 pr-1 mx-1 sm:mx-5',
          ].join(' ')}
          icon={<ArrowLeftIcon className="w-6 h-6" />}
          onClick={() => {
            setFile(undefined)
          }}
        >
          <div className="md:w-[290px]">
            <span className="hidden sm:inline select-none">
              {m.start_new()}
            </span>
          </div>
        </Button>
        <div
          className={[
            'text-3xl font-bold tracking-tight text-primary',
            'hover:opacity-80 transition duration-300 ease-in-out cursor-default',
          ].join(' ')}
        >
          Inpaint-web
        </div>
        <div className="hidden md:flex justify-end w-[300px] mx-1 sm:mx-5">
          <Button
            className="mr-5 flex"
            onClick={() => {
              if (languageTag() === 'es') {
                setLanguageTag('en')
              } else {
                setLanguageTag('es')
              }
            }}
          >
            <p>{languageTag() === 'en' ? 'Español' : 'English'}</p>
          </Button>
          <Button
            className="w-38 flex sm:visible"
            icon={<InformationCircleIcon className="w-6 h-6" />}
            onClick={() => {
              setShowAbout(true)
            }}
          >
            <p>{m.feedback()}</p>
          </Button>
        </div>
      </header>

      <main
        style={{
          height: 'calc(100vh - 56px)',
        }}
        className=" relative"
      >
        {file ? (
          <Editor file={file} />
        ) : (
          <>
            <div className="flex h-full flex-1 flex-col items-center justify-center overflow-hidden">
              <div className="h-72 sm:w-1/2 max-w-5xl">
                <FileSelect
                  onSelection={async f => {
                    const { file: resizedFile } = await resizeImageFile(
                      f,
                      1024 * 4
                    )
                    setFile(resizedFile)
                  }}
                />
              </div>
            </div>
          </>
        )}
      </main>

      {showAbout && (
        <Modal>
          <div ref={modalRef} className="text-xl space-y-5">
            <p>
              {' '}
              Report issues at:{' '}
              <a
                href="https://github.com/lxfater/inpaint-web"
                style={{ color: 'blue' }}
                rel="noreferrer"
                target="_blank"
              >
                Inpaint-web
              </a>
            </p>
          </div>
        </Modal>
      )}
      {!(downloadProgress === 100) && (
        <Modal>
          <div className="text-xl space-y-5">
            <p>{m.inpaint_model_download_message()}</p>
            <Progress percent={downloadProgress} />
          </div>
        </Modal>
      )}
    </div>
  )
}

export default App
