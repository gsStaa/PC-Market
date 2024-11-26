import { Forms } from '../Content/Forms/Forms'
import { Product } from '../Content/Product/Product'
import { Slider } from '../Content/Slider/Slider'

export function HomePage() {
  return (
    <div>
      <Slider />
      <Product />
      <Forms />
    </div>
  )
}
