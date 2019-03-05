import  React from 'react';
import { connect } from "react-redux";
import { mainSelectors } from "./duck";
import MaterialView from "./MaterialView";

export type Material = {
    id: number,
    date: string,
    name: string,
    type: number,
    category: string,
    price: number,
    incPerc: number,
    decPerc: number,
    difference: number,
};

interface IMaterialPanelProps {
    materials: Material[],
    nAllMaterials: number,
};

interface IMaterialPanelState {};

interface IOwnProps {
};

class MaterialsPanel extends React.Component<IMaterialPanelProps, IMaterialPanelState> {

    render() {
        const { materials, nAllMaterials } = this.props;
        return (
            <div className="main-preview-wrapper">
                <div>
                    <span className="main-preview-statistic-label">All materials</span><span className="main-preview-statistic-value">{nAllMaterials}</span>
                  <span className="main-preview-header-text materials">Propose Yours?</span>
                </div>
                <hr className="main-preview-statistic-ruler" />
                {
                    materials.slice(0, 18).map(material =>
                        <MaterialView key={material.id} {...material} />
                    )
                }
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    const materials = mainSelectors.getMaterials(state.market);
    return {
        materials,
        nAllMaterials: materials.length,
    };
};

export default connect<IMaterialPanelProps, IMaterialPanelState, IOwnProps>(mapStateToProps)(MaterialsPanel);