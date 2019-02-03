import React, { Component } from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import {yellow500} from 'material-ui/styles/colors';

import AppBar from 'material-ui/AppBar';

const Footer = () => <AppBar title = "Film Finder"
                             style={{position:'fixed',bottom:0}}
                             iconElementRight={<FileCloudDownload color={yellow500} />}
                         />;
export default Footer;
