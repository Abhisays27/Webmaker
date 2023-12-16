import React ,{useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faqs = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel)=> {
    setExpanded(isExpanded ? panel: false)
  }
  return (
    

    <div className='justify-center text-center h-[630px]'>
      <div className=" text-center text-gray-900 text-[58px] font-bold">Frequently asked questions</div>
      <div className=" text-center text-gray-500 text-xl font-medium ">Everything you need to know about the product and billing.</div>
      <div className='  flex flex-col items-center w-auto mt-10'>
      <Accordion expanded={expanded==='panel1' }  onChange={(event,isExpanded)=> handleChange(isExpanded,'panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-xl'>Is there a free trial available</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='font-thin text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel2'} onChange={(event,isExpanded)=> handleChange(isExpanded,'panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I change my plan later?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel3'}  onChange={(event,isExpanded)=> handleChange(isExpanded,'panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel3a-header"
        >
          <Typography>What is your cancellation policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel4'}  onChange={(event,isExpanded)=> handleChange(isExpanded,'panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel3a-header"
        >
          <Typography>Can other info be added to an invoice?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel5'}  onChange={(event,isExpanded)=> handleChange(isExpanded,'panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel3a-header"
        >
          <Typography>How does billing work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='panel6'}  onChange={(event,isExpanded)=> handleChange(isExpanded,'panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel3a-header"
        >
          <Typography>How do I change my account email?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      
      
    </div>
  )
}

export default Faqs