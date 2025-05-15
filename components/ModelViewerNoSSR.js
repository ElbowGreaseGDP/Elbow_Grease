// components/ModelViewerNoSSR.js
import React, { forwardRef, useEffect } from 'react';

let modelViewerLoaded = false;

const ModelViewerNoSSR = forwardRef(
    ({ src, poster, autoRotate = true, ...rest }, ref) => {
        useEffect(() => {
            if (typeof window !== 'undefined' && !modelViewerLoaded) {
                modelViewerLoaded = true;
                import('@google/model-viewer')
                    .catch((err) => {
                        console.error('Failed to load model-viewer:', err);
                    });
            }
        }, []);

        return (
            <model-viewer
                ref={ref}
                src={src}
                poster={poster}
                camera-controls
                auto-rotate={autoRotate}
                ar
                environment-image="neutral"
                loading="lazy"
                style={{
                    width: '100%',
                    height: '80vh',
                    borderRadius: '1rem',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                }}
                {...rest}
            />
        );
    }
);

export default ModelViewerNoSSR;
