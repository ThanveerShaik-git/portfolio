import { Flex } from "rebass";

import Header from "./components/Header";

/**
 * App
 * @returns Container
 */
const App = () => {
  return (
    <Flex flexDirection="column">
      <Header
        name="Hi there, This is Tanveer Qurishi Shaik"
        info="Am a cool dude, enthusiastic, food lover and bird watcher."
        designation="Front end developer"
      />
    </Flex>
  );
};

export default App;
