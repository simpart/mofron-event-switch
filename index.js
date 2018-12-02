/**
 * @file mofron-event-switch/index.js
 * @brief switch event for mofron
 * @author simpart
 */
const mf = require('mofron');
const Click = require('mofron-event-click');

mf.event.Switch = class extends Click {
    
    /**
     * initialize event
     *
     * @param p1 (object) event option
     * @param p1 (function) handler function
     * @param p1 (array) handler [func, param]
     */
    constructor (po) {
        try {
            super();
            this.name('Switch');
            
            /* switch status */
            this.handler((hd1_cmp, hd2_flg, hd3_ev) => {
                try { hd3_ev.status(!hd2_flg); } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            }, this);
            
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * execute handler
     *
     * @note private method
     */
    execHandler () {
        try { super.execHandler(this.status()); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * switch status setter/getter
     *
     * @param p1 (boolean) switch status
     * @param p1 (undefined) call as getter
     */
    status (prm) {
        try { return this.member('status', 'boolean', prm, false); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.event.Switch;
/* end of file */
