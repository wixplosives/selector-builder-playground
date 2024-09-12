import { createBoard } from '@wixc3/react-board';
import { ExternalComp } from '../../../components/external-comp/external-comp';

export default createBoard({
    name: 'ExternalComp',
    Board: () => <ExternalComp />,
    isSnippet: true,
});
