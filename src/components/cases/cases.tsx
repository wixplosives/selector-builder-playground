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
                    <p className={classNames(styles.red, styles.fancy)}>
                        This paragraph has red text and "fancy" styling.
                    </p>
                    <p className={styles.red}>This paragraph has red text and "fancy" styling.</p>
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
                    <h1 id={styles.blue}>This paragraph has a blue background.</h1>
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
                <ol>
                    <li>First item</li>
                    <li> Second item</li>
                    <li className={styles.list}>Third item</li>
                    <li>Third item</li>
                </ol>
            </div>
            <div className={styles.section}>
                <div>
                    <h2>Pseudo elements</h2>
                </div>
                <div>
                    <h5>
                        You can use the ::first-line pseudo-element to add a special effect to the
                        first line of a text. Some more text. And even more, and more, and more, and
                        more, and more, and more, and more, and more, and more, and more, and more,
                        and more.
                    </h5>
                </div>
            </div>
            <div className={styles.section}>
                <div>
                    <h2>Sibling + inheritance rule</h2>
                </div>
                <div>
                    <div className={styles['blog-post']}>
                        <p>
                            CSS selectors are used to select the HTML elements you want to style...
                        </p>
                        <div class={'author'}>Written by: Jane Doe</div>

                        <h3>Comments</h3>
                        <p>Great post! I learned a lot about CSS selectors.</p>

                        <p>Can you explain more about pseudo-classes?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
