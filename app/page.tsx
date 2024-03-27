
// import Image from "next/image";
import "./page.scss";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from "next/image";
import {DragableMenu} from "@/components/DragableMenu/DragableMenu";

const careState = {
    headInfo: 'Салонный уход выполняется при помощи косметических (гиппоаллергенных) средств, которые не тестируются на животных!',
    info: 'Перед началом процедуры проводится диагностика с помощью трихоскопа, оценивается общее состояние волос, степень повреждения, состояние кожи головы.',
    footerInfo: 'Уходы проводятся без перчаток. ❌ Нет никаких паров формальдегида, разрешено беременным и детям 👌',
    cares: [
        {name: 'OLEO & CONTROL',
        description: 'Направлен на восстановление дисульфидных связей, уход на глубокое увлажнение, отлично подойдёт блонду, натуральным / тонким/ спутанным волосам👌 увлажнение волоса, уплотнение',
        imageBefore: '/ImagesCarousel/1.jpg',
        imageAfter: '/ImagesCarousel/2.jpg',
        },
        {name: 'Organic care',
        description: 'СПА-процедура для волос с использованием аромамасел + массаж головы Шиацу. Уход подходит для плотных волос / волосы после кератина ! Процедура отлично напитывает волосы до кортекса, делая их мягкими и шелковистыми🥰',
        imageBefore: '/ImagesCarousel/3.jpg',
        imageAfter: '/ImagesCarousel/4.jpg',
        },
        {name: 'MAGIC BX',
        description: 'Процедура биоламинирования для волос, дарит глубокое увлажнение, гладкость и шелковистость без эффекта склеивания. Для длинных / тонких / плотных / спутанных волос.',
        imageBefore: '/ImagesCarousel/5.jpg',
        imageAfter: '/ImagesCarousel/6.jpg',
        },
        {name: 'Кудрявый метод',
        description: 'Регенерирует структуру вьющихся/ кудрявых волос , придавая им больше эластичности и плотности, анти-фриз, помогает создать локоны, восстанавливая естественную форму ,т.к. глубоко увлажняет волосы, запечатывая кутикулу.',
        imageBefore: '/ImagesCarousel/7.jpg',
        imageAfter: '/ImagesCarousel/8.jpg',
        },
    ]
}
// export default function Home() {
//     // const [expanded, setExpanded] = React.useState<string | false>('panel0');
//     const [expanded, setExpanded] = React.useState<string>('panel0');
//
//     const handleChange =
//         (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
//             // setExpanded(isExpanded ? panel : false);
//             setExpanded(panel);
//         };
//     return (
//         <div className={`wrapper accordionItems`}>
//             <p className={'accordionInfo'}>{careState.headInfo}</p>
//             <p className={'accordionInfo'}>{careState.info}</p>
//             {
//                 careState.cares.map((care, index) => {
//                     const isExpanded = expanded === `panel${index}`;
//                     return <Accordion expanded={isExpanded} onChange={handleChange(`panel${index}`)} key={index} className="customAccordion">
//                         <AccordionSummary
//                             className={`${isExpanded ? 'activeItem item' : 'item'}`}
//                             expandIcon={<ExpandMoreIcon/>}
//                             aria-controls={`panel${index}bh-content`}
//                             id={`panel${index}bh-header`}>
//                             <Typography sx={{width: '95%', flexShrink: 0}}>{care.name}</Typography>
//                         </AccordionSummary>
//                         <AccordionDetails>
//                             <Typography>
//                                 {care.description}
//                                 <Image width={300} height={300} alt="photo" src={`/ImagesCarousel/${index}.jpg`}/>
//                             </Typography>
//                         </AccordionDetails>
//                     </Accordion>
//                 })
//             }
//
//
//             <p>{careState.footerInfo}</p>
//         </div>
//     );
// }

export default function Home() {
    return (
        <div className={`wrapper accordionItems`}>
            <p className={'accordionInfo'}>{careState.headInfo}</p>
            <p className={'accordionInfo'}>{careState.info}</p>
            <DragableMenu cares={careState.cares}/>
            <p className={'accordionInfo'}>{careState.footerInfo}</p>
        </div>
    );
}