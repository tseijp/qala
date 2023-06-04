import { Subtraction } from '@react-three/csg'

export const Gap = ({ args }: { args: [number, number, number] }) => {
  return (
    // @ts-ignore
    <Subtraction>
      <boxGeometry args={args} />
    </Subtraction>
  )
}
