import { CameraIcon, UserAddIcon, ChatAlt2Icon } from '@heroicons/vue/solid'
export const navigation = [
  {name: 'Bio', path: '/', icon: UserAddIcon, current: false},
  {name: 'Galeria ', path: '/galeria', icon: CameraIcon, current: true},
  {name: 'Contatos', path: 'contato', icon: ChatAlt2Icon, current: false},
]
