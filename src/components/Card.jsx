import {AnimatePresence, motion} from 'framer-motion';
import {useState} from 'react';

function Card() {
    const [isOpen, setIsOpen] = useState(false);
    <motion.div 
        transition={{layout:{duration: 0.5, type: "spring"}}}
        layout 
        onClick={() => setIsOpen(!isOpen)} 
        className='card'
        style={{
            borderRadius:"1rem", 
            boxShadow:'0px 10px 30px rgba(0,0,0,0.5)',
        }}
        >
        <motion.h2 Layout='position' >The date is here </motion.h2>
        <AnimatePresence>
        {isOpen && (
        <motion.div 
            initial={{ opacity:0 }} 
            animate={{ opacity:1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity:0 }}
            className='expand'>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, 
                minima rem, ad commodi repellendus dolor veniam animi voluptas,
                iste saepe beatae provident architecto neque harum veritatis ipsam! 
                Dolorum, laboriosam voluptatum.
                </p>
        </motion.div>
        )}
        </AnimatePresence>
    </motion.div>
}
export default Card;