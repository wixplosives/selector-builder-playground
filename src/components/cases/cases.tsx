import classNames from 'classnames';
import styles from './cases.module.scss';

export interface CasesProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Cases = ({ className }: CasesProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.section}>
                <div>
                    <h2>Class selectors</h2>
                </div>
                <div>
                    <p class="red fancy" className={classNames(styles.red, styles.fancy)}>
                        This paragraph has red text and "fancy" styling.
                    </p>
                    <p class="red fancy" className={styles.red}>
                        This paragraph has red text and "fancy" styling.
                    </p>
                </div>
            </div>
            <div className={styles.section}>
                <div>
                    <h2>Type selectors</h2>
                </div>
                <div>
                    <span>Here&apos;s a span with some colors</span>
                </div>
            </div>
            <div className={styles.section}>
                <div>
                    <h2>ID selectors</h2>
                </div>
                <div>
                    <p id="blue">This paragraph has a blue background.</p>
                </div>
            </div>
            <div className={styles.section}>
                <div>
                    <h2>Pseudo classes (:hover, :visited)</h2>
                </div>
                <div>
                    <button className={styles.button}>Button</button>
                    <a href="/">Click here</a>
                </div>
            </div>
            <div className={styles.section}>
                <div>
                    <h2>Pseudo elements</h2>
                </div>
                <div>
                    <p>
                        You can use the ::first-line pseudo-element to add a special effect to the
                        first line of a text. Some more text. And even more, and more, and more, and
                        more, and more, and more, and more, and more, and more, and more, and more,
                        and more.
                    </p>
                </div>
            </div>
        </div>
    );
};
