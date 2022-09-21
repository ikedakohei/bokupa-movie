/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/future/image'
import clsx from 'clsx'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export function CastsAndStaffsModal({
  openCastsAndStaffsModal,
  setOpenCastsAndStaffsModal,
  person,
}) {
  return (
    <Transition.Root show={openCastsAndStaffsModal} as={Fragment}>
      <Dialog
        style={{ zIndex: 1000 }}
        as="div"
        className="relative z-10"
        onClose={setOpenCastsAndStaffsModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative max-w-2xl transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-6">
                <div>
                  <div
                    className="ml-auto flex h-6 w-6 items-center justify-center rounded-full"
                    onClick={() => setOpenCastsAndStaffsModal(false)}
                  >
                    <XMarkIcon
                      className="h-12 w-12 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <div className="group relative mx-auto h-[20rem] transform overflow-hidden rounded-4xl md:w-80">
                      <div className="absolute inset-0">
                        <div
                          className={clsx(
                            'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border xl:right-6'
                          )}
                        />
                        <Image
                          className="absolute inset-0 h-full w-full rounded-4xl object-cover"
                          src={person?.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 text-center text-xl tracking-tight text-slate-900">
                      {person?.name}
                    </h3>
                    <p className="mt-1 text-center text-base tracking-tight text-slate-500">
                      {person?.role}
                    </p>
                    <div className="mt-1 text-start text-lg tracking-tight text-slate-900">
                      {person?.description}
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-center sm:mt-6">
                  <div
                    className="flex justify-center rounded-md px-4 py-2 text-sm text-gray-400"
                    onClick={() => setOpenCastsAndStaffsModal(false)}
                  >
                    閉じる
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
