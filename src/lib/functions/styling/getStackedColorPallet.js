export default function getStackedColorPallet(stackedLenght, useTrans = false, usePrimary = true){
    let colorSequence = []
    if(usePrimary === true){
        if(useTrans === true) {
            switch (stackedLenght) {
            case 1:
                colorSequence = ['var(--primary-trans-base)']
                break;
            case 2:
                colorSequence = ['var(--primary-trans-base)', 'var(--primary-trans-300)']
                break;
            case 3:
                colorSequence = ['var(--primary-trans-700)', 'var(--primary-trans-base)', 'var(--primary-trans-300)']
                break;
            case 4:
                colorSequence = ['var(--primary-trans-900)', 'var(--primary-trans-700)', 'var(--primary-trans-base)', 'var(--primary-trans-300)']
                break;
            case 5:
                colorSequence = ['var(--primary-trans-900)', 'var(--primary-trans-700)', 'var(--primary-trans-base)', 'var(--primary-trans-300)', 'var(--primary-trans-200)']
                break;
            case 6:
                colorSequence = ['var(--primary-trans-900)', 'var(--primary-trans-700)', 'var(--primary-trans-600)', 'var(--primary-trans-base)', 'var(--primary-trans-300)', 'var(--primary-trans-200)']
                break;
            case 7:
                colorSequence = ['var(--primary-trans-900)', 'var(--primary-trans-700)', 'var(--primary-trans-600)', 'var(--primary-trans-base)', 'var(--primary-trans-400)', 'var(--primary-trans-300)', 'var(--primary-trans-200)']
                break;
            case 8:
                colorSequence = ['var(--primary-trans-900)', 'var(--primary-trans-800)', 'var(--primary-trans-700)', 'var(--primary-trans-600)', 'var(--primary-trans-base)', 'var(--primary-trans-400)', 'var(--primary-trans-300)', 'var(--primary-trans-200)']
                break;
            default:
                colorSequence = ['var(--primary-trans-900)', 'var(--primary-trans-800)', 'var(--primary-trans-700)', 'var(--primary-trans-600)', 'var(--primary-trans-base)', 'var(--primary-trans-400)', 'var(--primary-trans-300)', 'var(--primary-trans-200)']
                break;
            } 
        } else {
           switch (stackedLenght) {
                case 1:
                    colorSequence = ['var(--primary-base)']
                    break;
                case 2:
                    colorSequence = ['var(--primary-base)', 'var(--primary-300)']
                    break;
                case 3:
                    colorSequence = ['var(--primary-700)', 'var(--primary-base)', 'var(--primary-300)']
                    break;
                case 4:
                    colorSequence = ['var(--primary-900)', 'var(--primary-700)', 'var(--primary-base)', 'var(--primary-300)']
                    break;
                case 5:
                    colorSequence = ['var(--primary-900)', 'var(--primary-700)', 'var(--primary-base)', 'var(--primary-300)', 'var(--primary-200)']
                    break;
                case 6:
                    colorSequence = ['var(--primary-900)', 'var(--primary-700)', 'var(--primary-600)', 'var(--primary-base)', 'var(--primary-300)', 'var(--primary-200)']
                    break;
                case 7:
                    colorSequence = ['var(--primary-900)', 'var(--primary-700)', 'var(--primary-600)', 'var(--primary-base)', 'var(--primary-400)', 'var(--primary-300)', 'var(--primary-200)']
                    break;
                case 8:
                    colorSequence = ['var(--primary-900)', 'var(--primary-800)', 'var(--primary-700)', 'var(--primary-600)', 'var(--primary-base)', 'var(--primary-400)', 'var(--primary-300)', 'var(--primary-200)']
                    break;
                default:
                    colorSequence = ['var(--primary-900)', 'var(--primary-800)', 'var(--primary-700)', 'var(--primary-600)', 'var(--primary-base)', 'var(--primary-400)', 'var(--primary-300)', 'var(--primary-200)']
                    break;
            }   
        }
    } else{    
        if(useTrans === true) {
            switch (stackedLenght) {
                case 1:
                    colorSequence = ['var(--primary-trans-base)']
                    break;
                case 2:
                    colorSequence = ['var(--primary-trans-base)', 'var(--primary-trans-300)']
                    break;
                case 3:
                    colorSequence = ['var(--primary-trans-700)', 'var(--primary-trans-base)', 'var(--primary-trans-300)']
                    break;
                case 4:
                    colorSequence = ['var(--primary-trans-900)', 'var(--primary-trans-700)', 'var(--primary-trans-base)', 'var(--primary-trans-300)']
                    break;
                case 5:
                    colorSequence = ['var(--primary-trans-900)', 'var(--primary-trans-700)', 'var(--primary-trans-base)', 'var(--primary-trans-300)', 'var(--primary-trans-200)']
                    break;
                case 6:
                    colorSequence = ['var(--primary-trans-900)', 'var(--primary-trans-700)', 'var(--primary-trans-600)', 'var(--primary-trans-base)', 'var(--primary-trans-300)', 'var(--primary-trans-200)']
                    break;
                case 7:
                    colorSequence = ['var(--primary-trans-900)', 'var(--primary-trans-700)', 'var(--primary-trans-600)', 'var(--primary-trans-base)', 'var(--primary-trans-400)', 'var(--primary-trans-300)', 'var(--primary-trans-200)']
                    break;
                case 8:
                    colorSequence = ['var(--primary-trans-900)', 'var(--primary-trans-800)', 'var(--primary-trans-700)', 'var(--primary-trans-600)', 'var(--primary-trans-base)', 'var(--primary-trans-400)', 'var(--primary-trans-300)', 'var(--primary-trans-200)']
                    break;
                default:
                    colorSequence = ['var(--primary-trans-900)', 'var(--primary-trans-800)', 'var(--primary-trans-700)', 'var(--primary-trans-600)', 'var(--primary-trans-base)', 'var(--primary-trans-400)', 'var(--primary-trans-300)', 'var(--primary-trans-200)']
                break;
            } 
        } else {
            switch (stackedLenght) {
                case 1:
                    colorSequence = ['var(--secondary-base)']
                    break;
                case 2:
                    colorSequence = ['var(--secondary-base)', 'var(--secondary-300)']
                    break;
                case 3:
                    colorSequence = ['var(--secondary-700)', 'var(--secondary-base)', 'var(--secondary-300)']
                    break;
                case 4:
                    colorSequence = ['var(--secondary-900)', 'var(--secondary-700)', 'var(--secondary-base)', 'var(--secondary-300)']
                    break;
                case 5:
                    colorSequence = ['var(--secondary-900)', 'var(--secondary-700)', 'var(--secondary-base)', 'var(--secondary-300)', 'var(--secondary-200)']
                    break;
                case 6:
                    colorSequence = ['var(--secondary-900)', 'var(--secondary-700)', 'var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-300)', 'var(--secondary-200)']
                    break;
                case 7:
                    colorSequence = ['var(--secondary-900)', 'var(--secondary-700)', 'var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)']
                    break;
                case 8:
                    colorSequence = ['var(--secondary-900)', 'var(--secondary-800)', 'var(--secondary-700)', 'var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)']
                    break;
                default:
                    colorSequence = ['var(--secondary-900)', 'var(--secondary-800)', 'var(--secondary-700)', 'var(--secondary-600)', 'var(--secondary-base)', 'var(--secondary-400)', 'var(--secondary-300)', 'var(--secondary-200)']
                    break;
            }  
        }
    }

    if(stackedLenght > 8){
        return colorSequence.concat(getStackedColorPallet(stackedLenght - 8, useTrans, !usePrimary))
    } else {
        return colorSequence
    }
}
