import ElementInput from '../features/elementHighlighter/ElementInput';
import { useElementHighlight } from '../features/elementHighlighter/useElementHighlight';
import styles from '../features/elementHighlighter/elementStyles.module.css';

const App = () => {
  const { firstNameParts, lastNameParts } = useElementHighlight();

  return (
    <div className="bg-dark d-flex vh-100 align-items-center justify-content-center">
      <div className="flex-column">
        <div className="flex flex-col text-center name-highlight">
          <h1 className="fw-bold text-white">
            {firstNameParts.map(([part, isHighlighted], idx) => (
                <span key={idx} className={isHighlighted ? styles.highlighted : ''}>{part}</span>
            ))}
          </h1>
          <h1 className="font-bold text-white">
            {lastNameParts.map(([part, isHighlighted], idx) => (
                <span key={idx} className={isHighlighted ? styles.highlighted : ''}>{part}</span>
            ))}
          </h1>
        </div>
        <ElementInput />
      </div>
    </div>
  );
};

export default App;
