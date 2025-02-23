import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Item } from '../fundamentals/page';

export default function ItemsAccordion({items}:{items: Item[]}) {
  return (
    <div style={{maxWidth: '70vw', minWidth: '50vw'}}>
        {
          items.map((item) => {
              return (
              <Accordion data-test={`accordion-item-${item.id}`} key={item.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    id="panel1a-header"
                  >
                    <Typography data-test={`accordion-item-${item.id}-title`}>{item.summary}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography data-test={`accordion-item-${item.id}-details`}>
                      {item.details}
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              )
          })
        }
    </div>
  );
}