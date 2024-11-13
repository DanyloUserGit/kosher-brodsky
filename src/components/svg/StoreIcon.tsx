export const StoreIcon = ({
    fill
}:{
    fill?:string
}) => {
    return(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32px" height="32px"  style={{padding:"18px", shapeRendering:"geometricPrecision", textRendering:"geometricPrecision", fillRule:"evenodd", clipRule:"evenodd"}} xmlnsXlink="http://www.w3.org/1999/xlink">
            <g><path style={{opacity:"0.92"}} fill={fill || "#9a9a9a"} d="M 4.5,3.5 C 11.8333,3.5 19.1667,3.5 26.5,3.5C 27.0577,7.01053 27.7243,10.5105 28.5,14C 26.9899,18.3822 26.3232,22.8822 26.5,27.5C 19.1667,27.5 11.8333,27.5 4.5,27.5C 4.67679,22.8822 4.01012,18.3822 2.5,14C 3.27568,10.5105 3.94235,7.01053 4.5,3.5 Z M 6.5,5.5 C 8.33702,5.63945 8.67036,6.30612 7.5,7.5C 6.70245,7.04311 6.36912,6.37644 6.5,5.5 Z M 10.5,5.5 C 12.337,5.63945 12.6704,6.30612 11.5,7.5C 10.7025,7.04311 10.3691,6.37644 10.5,5.5 Z M 14.5,5.5 C 17.8984,5.17964 21.2317,5.51298 24.5,6.5C 22.8333,6.83333 21.1667,7.16667 19.5,7.5C 17.3603,7.44392 15.6936,6.77725 14.5,5.5 Z M 8.5,9.5 C 9.64911,9.79106 10.3158,10.6244 10.5,12C 10.1667,12.8333 9.83333,13.6667 9.5,14.5C 8.54811,12.9547 8.21478,11.288 8.5,9.5 Z M 12.5,9.5 C 13.6491,9.79106 14.3158,10.6244 14.5,12C 14.1667,12.8333 13.8333,13.6667 13.5,14.5C 12.5481,12.9547 12.2148,11.288 12.5,9.5 Z M 16.5,9.5 C 17.6491,9.79106 18.3158,10.6244 18.5,12C 18.1667,12.8333 17.8333,13.6667 17.5,14.5C 16.5481,12.9547 16.2148,11.288 16.5,9.5 Z M 20.5,9.5 C 21.6491,9.79106 22.3158,10.6244 22.5,12C 22.1667,12.8333 21.8333,13.6667 21.5,14.5C 20.5481,12.9547 20.2148,11.288 20.5,9.5 Z M 6.5,17.5 C 12.5,17.5 18.5,17.5 24.5,17.5C 24.5,20.1667 24.5,22.8333 24.5,25.5C 18.5,25.5 12.5,25.5 6.5,25.5C 6.5,22.8333 6.5,20.1667 6.5,17.5 Z"/></g>
        </svg>
        </>
    );
}