import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { Flex } from "rebass";

/**
 * TextSlowMotion
 * @param {text} param0
 * @returns string
 */
const TextSlowMotion = ({ text, children }) => {
  const [flip, setFlip] = useState(false);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1200,
    reverse: flip,
    reset: true,
    onReset: () => setFlip(!flip),
  });

  return (
    <Flex marginBottom="20px">
      <animated.div style={props} styles={{}}>
        {text}
        {children}
      </animated.div>
    </Flex>
  );
};

export default TextSlowMotion;
