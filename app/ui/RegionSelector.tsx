import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import regions from '@/regions';

export type RegionOption = { value: string; label: string };

const RegionSelector = ({
    value,
    onChange,
}: {
    value: RegionOption | null;
    onChange: (option: RegionOption) => void;
}) => {
    const options = regions.map((r) => ({
        value: r.slug,
        label: r.name,
    }));

    return (
        <Select
            id="region-select"
            placeholder="SELECT REGION"
            value={value}
            options={options}
            components={makeAnimated()}
            onChange={(event: any) => {
                if (event) onChange(event);
            }}
            styles={{
                control: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: 'var(--color-dark)',
                    border: '1px solid var(--color-white)',
                    borderRadius: '10px',
                    boxShadow: 'none',
                    minHeight: 'unset',
                    padding: '0.35rem 0.25rem',
                    fontSize: '1.2rem',
                    '&:hover': {
                        border: '1px solid var(--color-white)',
                        boxShadow: 'none',
                    },
                }),
                placeholder: (baseStyles) => ({
                    ...baseStyles,
                    color: 'var(--color-white)',
                }),
                singleValue: (baseStyles) => ({
                    ...baseStyles,
                    color: 'var(--color-white)',
                }),
                dropdownIndicator: (baseStyles) => ({
                    ...baseStyles,
                    color: 'var(--color-white)',
                    '&:hover': { color: 'var(--color-white)' },
                }),
                indicatorSeparator: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: 'var(--color-white)',
                }),
                option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isFocused
                        ? 'var(--color-light)'
                        : 'var(--color-dark)',
                    color: state.isFocused
                        ? 'var(--color-dark)'
                        : 'var(--color-white)',
                    cursor: 'pointer',
                }),
                menu: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: 'var(--color-dark)',
                    border: '1px solid var(--color-white)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: 'none',
                }),
            }}
        />
    );
};

export default RegionSelector;
