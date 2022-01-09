import { motion } from 'framer-motion'; 

function SunIcon() {
  return (
    <motion.svg 
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="100"
      height="100"
    >
<motion.path
 
  initial={{
    opacity: 0,
    rotate: -45, 
  }}
  animate={{
    opacity: 1,
    rotate: 0, 
  }}
 
/>
    </motion.svg> 
  );
}

export default SunIcon;