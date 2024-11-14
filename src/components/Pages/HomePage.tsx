import { Forms } from "../Content/Forms/Forms";
import { Product } from "../Content/Product/Product";
import { Slider } from "../Content/Slider/Slider";

export function HomePage() {
  return (
    <div>
      <Slider src={""} lable={""} desc={""} />
      <Product src={""} lable={""} desc={""} />
      <Forms
        FormsText={""}
        FormsInputText={""}
        inputStyle={""}
        containerClassName={""}
      />
    </div>
  );
}
