import {Html} from '@react-three/drei'

const Loader = () => {
  return (
    <Html>
    <div className="flex flex-row gap-2">
  <div className="w-4 h-4 rounded-full bg-green-700 animate-bounce"></div>
  <div className="w-4 h-4 rounded-full bg-green-700 animate-bounce [animation-delay:-.3s]"></div>
  <div className="w-4 h-4 rounded-full bg-green-700 animate-bounce [animation-delay:-.5s]"></div>
</div>
    </Html>
  );
};

export default Loader;
