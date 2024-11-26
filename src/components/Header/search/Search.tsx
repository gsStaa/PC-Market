import './Search.css'
import { FC } from 'react'
import { SIkon } from './SIkon'

export const Search: FC = () => {
  return (
    <div className='input-wrapper'>
      <button className='icon'>
        <SIkon />
      </button>
      <input
        type='text'
        name='text'
        className='input'
        placeholder='Поиск по сайту'
      />
    </div>
  )
}
