import { FeedbackForm } from '../Content/feedbackForm/feedbackForm'
import { Product } from '../Content/Product/Product'
import { Slider } from '../Content/Slider/Slider'

export function HomePage() {
  return (
    <>
      <Slider />
      <Product />
      <FeedbackForm />
    </>
  )
}
