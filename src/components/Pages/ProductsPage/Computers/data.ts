export type TComputersItem = {
  src: string
  label: string
  price: number
  name: string[]
  specifications: string[]
  icon: string[]
  id: number
  quantity: number
  address: string
  category?: string
}

export let dataComputers = [
  {
    src: '/Computers/1.png',
    label: 'EDELWEISS NITRO',
    price: 101300,
    name: [
      'Видеокарта:',
      'Процессор:',
      'Материнская плата:',
      'Оперативная память:',
    ],
    specifications: [
      'NVIDIA GЕFORCE RTX 3060 12Гб',
      'Intel Core i3-13100F 3300 МГц',
      'Gigabyte H610M S2H',
      '16Гб DDR4 3000 МГц',
    ],
    icon: [
      '/Computers/Item/1.png',
      '/Computers/Item/2.png',
      '/Computers/Item/3.png',
      '/Computers/Item/4.png',
    ],
    idSpecifications: [
      'RTX 3060',
      'Intel Core i3',
      'Gigabyte H610M S2H',
      '16Гб',
    ],
    quantity: 3,
    id: 1,
    address: 'EDELWEISS-NITRO',
    category: 'Computers',
    text: 'Яркий представитель бюджетной серии игровых ПК. Строгий черный корпус для консервативных пользователе, а вот начинка прогрессивная и задаст жару вашим виртуальным противника.. Системный блок для игр и учебы.',
  },
  {
    src: '/Computers/2.png',
    label: 'EDELWEISS LUCIFER',
    price: 366700,
    name: [
      'Видеокарта:',
      'Процессор:',
      'Материнская плата:',
      'Оперативная память:',
    ],
    specifications: [
      'PALIT GEFORCE RTX 4080 SUPER JetStream 16 Гб',
      'Intel Core i9-13900KF 3200 МГц',
      'Gigabyte Z790 UD D5',
      '32 Гб Kingston Hyperx Fury 6000МГц',
    ],
    icon: [
      '/Computers/Item/1.png',
      '/Computers/Item/2.png',
      '/Computers/Item/3.png',
      '/Computers/Item/4.png',
    ],
    idSpecifications: [
      'RTX 4080 SUPER',
      'Intel Core i9',
      'Gigabyte Z790 UD D5',
      '32Гб',
    ],
    quantity: 4,
    id: 2,
    address: 'EDELWEISS-LUCIFER',
    category: 'Computers',
    text: 'Высокопроизводительный компьютер EDELWEISS LUCIFER в максимальной комплектации. Топовые комплектующие, новейшая графическая система 4080 16 GB 6 GDDR, водяное охлаждение. Решение удовлетворит предпочтения самых требовательных клиентов и геймеров',
  },
  {
    src: '/Computers/3.png',
    label: 'EDELWEISS RANGER',
    price: 389060,
    name: [
      'Видеокарта:',
      'Процессор:',
      'Материнская плата:',
      'Оперативная память:',
    ],
    specifications: [
      'GIGABYTE GEFORCE RTX 4080 SUPER GAMING 16 Гб',
      'AMD Ryzen 9 7900X 4700/5600 МГц',
      'ASUS PRIME X670-P',
      '64Гб DDR5 VULCAN 6000 МГц W',
    ],
    icon: [
      '/Computers/Item/1.png',
      '/Computers/Item/2.png',
      '/Computers/Item/3.png',
      '/Computers/Item/4.png',
    ],
    idSpecifications: [
      'RTX 4080 SUPER',
      'AMD Ryzen 9',
      'ASUS PRIME X670-P',
      '64Гб',
    ],
    quantity: 4,
    id: 3,
    address: 'EDELWEISS-RANGER',
    category: 'Computers',
    text: 'Если вы хотите купить супер мощный компьютер, в стильном корпусе и настраиваемой RGB подсветкой, топовым FPS, к тому же с очень низким уровнем шума, тогда EDELWEISS RANGER, именно эта модель подойдет под данные запросы идеально.',
  },
  {
    src: '/Computers/4.png',
    label: 'EDELWEISS RAPTOR',
    price: 149650,
    name: [
      'Видеокарта:',
      'Процессор:',
      'Материнская плата:',
      'Оперативная память:',
    ],
    specifications: [
      'NVIDIA GЕFORCE RTX 4060TI 8Гб',
      'Intel Core i5-14400F 2500 МГц',
      'ASUS B760M-K PRIME D4',
      '16Гб Kingston HyperX Fury 3000МГц',
    ],
    icon: [
      '/Computers/Item/1.png',
      '/Computers/Item/2.png',
      '/Computers/Item/3.png',
      '/Computers/Item/4.png',
    ],
    idSpecifications: ['RTX 4060TI', 'Intel Core i5', '16Гб'],
    quantity: 4,
    id: 4,
    address: 'EDELWEISS-RAPTOR',
    category: 'Computers',
    text: 'Стильный, современный мощный ПК для гейминга EDELWEISS RAPTOR. Снабжён производительной видеокартой RTX 4060 Ti  с поддержкой технологии трассировки лучей в реальном времени обеспечивающей реалистичную картинку и прекрасную цветопередачу.',
  },
]
