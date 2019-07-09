/**
 * Arquivo index.js
 * Este arquivo é o arquivo de entrada da aplicação. Tudo inicializará a partir
 * deste arquivo.
 */
import React from 'react';
import { render } from 'react-dom'; // Função por renderizar um componente react em html.

import App from './App';

render(<App />, document.getElementById('app'));
