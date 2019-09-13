import { customStylePopulationMunicipale } from './utils/popMunicipale';
import { customStyleEvolution } from './utils/evolutionPop';
import { customStyleDensity } from './utils/densitePop';
import {
  customStyleSoldesMigratoire,
  customStyleSoldesNaturel,
} from './utils/soldesPop';
import { customStyleAgeClasses } from './utils/ageClassesPop';
import {
  customStyleCommunal,
  customStyleCommunalTransparent,
  customStyleCommuneLabels,
  customStyleDepartemental,
  customStyleInterCommunal,
  customStyleInterCommunalTransparent,
} from '../../utils/administrativeBorders';

export default {
  sources: [
    {
      id: 'terralego',
      type: 'vector',
      url: '{{HOST}}/layer/reference/tilejson',
    },
  ],
  layers: [
    ...customStylePopulationMunicipale,
    ...customStyleEvolution,
    ...customStyleDensity,
    ...customStyleSoldesNaturel,
    ...customStyleSoldesMigratoire,
    ...customStyleAgeClasses,
    customStyleDepartemental,
    customStyleInterCommunal,
    customStyleInterCommunalTransparent,
    customStyleCommunal,
    customStyleCommunalTransparent,
    ...customStyleCommuneLabels,
  ],
};