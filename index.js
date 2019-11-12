'use strict';


const { spawn } = require('child_process');

function SpawnLoader({ spec }) {

    async function spawnTarget(config = {}, { Resource, onCancel }) {
        return spawn(spec.command, config.args != null ? config.args : spec.args);
    }

    return spawnTarget;
}

module.exports = SpawnLoader;
module.exports.study = ({ spec }) => spec;
