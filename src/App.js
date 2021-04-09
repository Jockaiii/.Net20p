import { GreetUser } from "./GreetUser";
import {Counter} from './Counter'

export const App = () => {
  return (
    <div>
      <GreetUser name="Joakim" age={20} />  
      <Counter />
    </div>
  );
};
