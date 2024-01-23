import React from 'react';
import './ProductBrandSelection.css';

type ProductBrandSelectionProps = {
    selectedBrand: string | undefined;
    selectBrand: (type: string | undefined) => void;
};

const ProductBrandSelection: React.FC<ProductBrandSelectionProps> = ({ selectedBrand, selectBrand }) => {
    const handleBrandSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        selectBrand(event.target.value);
    };
    return (
        <div className="select">
            <label>Select Brand: </label>
            <select className="brandSelection" value={selectedBrand || ""} onChange={handleBrandSelection}>
                <option value="">All Brands</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
            </select>
        </div> 
    )
};

export default ProductBrandSelection;