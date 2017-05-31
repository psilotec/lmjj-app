import React from 'react';
import { Image } from 'semantic-ui-react';

const Welcome = () => {
    return(
        <div className="welcomeLogo-flex">
            <Image wrapped size='medium' src={"https://s3.amazonaws.com/jj-app/lmjj-logo.png"} />
        </div>
    );
}

export default Welcome;