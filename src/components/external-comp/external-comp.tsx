import classNames from 'classnames';
import styles from './external-comp.module.scss';

export interface ExternalCompProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ExternalComp = ({ className }: ExternalCompProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <span className={styles.header}>
                        text in a span<h1>Heading 1</h1>
                    </span>
                    <span className={styles.content}>
                        <ol className={styles.section}>
                            <li className={styles.item}>First item</li>
                            <li className={styles.item}>Second item</li>
                            <li className={styles.item}>Third item</li>
                        </ol>
                        <p className={styles.section}>This is a paragraph.</p>
                        <p className={styles.section}>This is a paragraph.</p>text in a span
                    </span>
                </div>
            </div>
        </div>
    );
};
