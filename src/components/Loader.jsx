import {Html} from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
    <div class="flex flex-row gap-2">
  <div class="w-4 h-4 rounded-full bg-green-700 animate-bounce"></div>
  <div class="w-4 h-4 rounded-full bg-green-700 animate-bounce [animation-delay:-.3s]"></div>
  <div class="w-4 h-4 rounded-full bg-green-700 animate-bounce [animation-delay:-.5s]"></div>
</div>
    </Html>
  );
};

export default Loader;
