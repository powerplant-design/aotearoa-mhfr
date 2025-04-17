import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import capitalize from 'lodash/capitalize';
import regions from '@/regions';

const RegionSelector = () => {
    return (
        <Select
            id="region-select"
            placeholder="REGION"
            options={regions.map((region) => ({
                value: region.name,
                label: capitalize(region.name),
            }))}
            components={makeAnimated()}
            onChange={(event: any) => {
                if (event) {
                    const url = window.location.host.split('.');
                    url[0] = event.value;
                    const newUrl = url.join('.');
                    window.location.href = `${window.location.protocol}//${newUrl}`;
                }
            }}
            styles={{
                control: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: 'var(--color-dark)',
                    color: 'var(--color-light)',
                    border: '1px solid var(--color-light)',
                    boxShadow: 'none',
                    '&:hover': {
                        border: '1px solid var(--color-light)',
                        boxShadow: 'none',
                    },
                }),
                option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isFocused
                        ? 'var(--color-light)'
                        : 'var(--color-dark)',
                    color: state.isFocused
                        ? 'var(--color-dark)'
                        : 'var(--color-light)',
                    cursor: 'pointer',
                }),
                menu: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: 'var(--color-dark)',
                    color: 'var(--color-light)',
                    border: '1px solid var(--color-light)',
                    boxShadow: 'none',
                }),
            }}
        />
    );
};

export default RegionSelector;
