import { motion } from "framer-motion";

const LanderSwarmIcon = (props: { index: number; icon: string }) => {
  const { index, icon } = props;

  const randomY = Math.floor(Math.random() * 20) - 10; // Random number between -10 and 10
  const randomX = Math.floor(Math.random() * 20) - 10; // Random number between -10 and 10
  const randomDuration = Math.random() * 4 + 3;

  return (
    <motion.div
      className={`swarm__icon-container swarm__icon-container--${index}`}
      animate={{
        y: [randomY - 10, randomY + 10, randomY - 10], // Randomized Y-axis movement
        x: [randomX - 10, randomX + 10, randomX - 10], // Randomized X-axis movement
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    >
      <img className="swarm__icon" src={icon} />
    </motion.div>
  );
};
export default LanderSwarmIcon;
