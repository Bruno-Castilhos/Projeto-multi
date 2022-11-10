import { Box1 } from "../components/Boxes/Box1";
import { Box2 } from "../components/Boxes/Box2";
import { Box3 } from "../components/Boxes/Box3";

export function Home() {

  return (
    <ul className="flex justify-center flex-wrap gap-28 justify-self-center">
      <li><Box1 /></li>
      <li><Box2 /></li>
      <li><Box3 /></li>
    </ul>
  )
}