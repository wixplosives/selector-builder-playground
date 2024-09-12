import { createBoard } from '@wixc3/react-board';
import { Cases } from '../../../components/cases/cases';

export default createBoard({
    name: 'Selector-Builder',
    Board: () => <Cases />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 953,
        windowHeight: 767,
    },
});
