const FILES_TO_CACHE = [
    '/index.html',
    '/css/normalize.css',
    '/css/skeleton.css',
    '/js/flags.js',
    '/images/ad.png',
    '/images/ae.png',
    '/images/af.png',
    '/images/ag.png',
    '/images/ai.png',
    '/images/al.png',
    '/images/am.png',
    '/images/ao.png',
    '/images/aq.png',
    '/images/ar.png',
    '/images/as.png',
    '/images/at.png',
    '/images/au.png',
    '/images/aw.png',
    '/images/ax.png',
    '/images/az.png',
    '/images/ba.png',
    '/images/bb.png',
    '/images/bd.png',
    '/images/be.png',
    '/images/bf.png',
    '/images/bg.png',
    '/images/bh.png',
    '/images/bi.png',
    '/images/bj.png',
    '/images/bl.png',
    '/images/bm.png',
    '/images/bn.png',
    '/images/bo.png',
    '/images/bq.png',
    '/images/br.png',
    '/images/bs.png',
    '/images/bt.png',
    '/images/bv.png',
    '/images/bw.png',
    '/images/by.png',
    '/images/bz.png',
    '/images/ca.png',
    '/images/cc.png',
    '/images/cd.png',
    '/images/cf.png',
    '/images/cg.png',
    '/images/ch.png',
    '/images/ci.png',
    '/images/ck.png',
    '/images/cl.png',
    '/images/cm.png',
    '/images/cn.png',
    '/images/co.png',
    '/images/cr.png',
    '/images/cu.png',
    '/images/cv.png',
    '/images/cw.png',
    '/images/cx.png',
    '/images/cy.png',
    '/images/cz.png',
    '/images/de.png',
    '/images/dj.png',
    '/images/dk.png',
    '/images/dm.png',
    '/images/do.png',
    '/images/dz.png',
    '/images/ec.png',
    '/images/ee.png',
    '/images/eg.png',
    '/images/eh.png',
    '/images/er.png',
    '/images/es.png',
    '/images/et.png',
    '/images/fi.png',
    '/images/fj.png',
    '/images/fk.png',
    '/images/fm.png',
    '/images/fo.png',
    '/images/fr.png',
    '/images/ga.png',
    '/images/gb.png',
    '/images/gb-eng.png',
    '/images/gb-nir.png',
    '/images/gb-sct.png',
    '/images/gb-wls.png',
    '/images/gd.png',
    '/images/ge.png',
    '/images/gf.png',
    '/images/gg.png',
    '/images/gh.png',
    '/images/gi.png',
    '/images/gl.png',
    '/images/gm.png',
    '/images/gn.png',
    '/images/gp.png',
    '/images/gq.png',
    '/images/gr.png',
    '/images/gs.png',
    '/images/gt.png',
    '/images/gu.png',
    '/images/gw.png',
    '/images/gy.png',
    '/images/hk.png',
    '/images/hm.png',
    '/images/hn.png',
    '/images/hr.png',
    '/images/ht.png',
    '/images/hu.png',
    '/images/id.png',
    '/images/ie.png',
    '/images/il.png',
    '/images/im.png',
    '/images/in.png',
    '/images/io.png',
    '/images/iq.png',
    '/images/ir.png',
    '/images/is.png',
    '/images/it.png',
    '/images/je.png',
    '/images/jm.png',
    '/images/jo.png',
    '/images/jp.png',
    '/images/ke.png',
    '/images/kg.png',
    '/images/kh.png',
    '/images/ki.png',
    '/images/km.png',
    '/images/kn.png',
    '/images/kp.png',
    '/images/kr.png',
    '/images/kw.png',
    '/images/ky.png',
    '/images/kz.png',
    '/images/la.png',
    '/images/lb.png',
    '/images/lc.png',
    '/images/li.png',
    '/images/lk.png',
    '/images/lr.png',
    '/images/ls.png',
    '/images/lt.png',
    '/images/lu.png',
    '/images/lv.png',
    '/images/ly.png',
    '/images/ma.png',
    '/images/mc.png',
    '/images/md.png',
    '/images/me.png',
    '/images/mf.png',
    '/images/mg.png',
    '/images/mh.png',
    '/images/mk.png',
    '/images/ml.png',
    '/images/mm.png',
    '/images/mn.png',
    '/images/mo.png',
    '/images/mp.png',
    '/images/mq.png',
    '/images/mr.png',
    '/images/ms.png',
    '/images/mt.png',
    '/images/mu.png',
    '/images/mv.png',
    '/images/mw.png',
    '/images/mx.png',
    '/images/my.png',
    '/images/mz.png',
    '/images/na.png',
    '/images/nc.png',
    '/images/ne.png',
    '/images/nf.png',
    '/images/ng.png',
    '/images/ni.png',
    '/images/nl.png',
    '/images/no.png',
    '/images/np.png',
    '/images/nr.png',
    '/images/nu.png',
    '/images/nz.png',
    '/images/om.png',
    '/images/pa.png',
    '/images/pe.png',
    '/images/pf.png',
    '/images/pg.png',
    '/images/ph.png',
    '/images/pk.png',
    '/images/pl.png',
    '/images/pm.png',
    '/images/pn.png',
    '/images/pr.png',
    '/images/ps.png',
    '/images/pt.png',
    '/images/pw.png',
    '/images/py.png',
    '/images/qa.png',
    '/images/re.png',
    '/images/ro.png',
    '/images/rs.png',
    '/images/ru.png',
    '/images/rw.png',
    '/images/sa.png',
    '/images/sb.png',
    '/images/sc.png',
    '/images/sd.png',
    '/images/se.png',
    '/images/sg.png',
    '/images/sh.png',
    '/images/si.png',
    '/images/sj.png',
    '/images/sk.png',
    '/images/sl.png',
    '/images/sm.png',
    '/images/sn.png',
    '/images/so.png',
    '/images/sr.png',
    '/images/ss.png',
    '/images/st.png',
    '/images/sv.png',
    '/images/sx.png',
    '/images/sy.png',
    '/images/sz.png',
    '/images/tc.png',
    '/images/td.png',
    '/images/tf.png',
    '/images/tg.png',
    '/images/th.png',
    '/images/tj.png',
    '/images/tk.png',
    '/images/tl.png',
    '/images/tm.png',
    '/images/tn.png',
    '/images/to.png',
    '/images/tr.png',
    '/images/tt.png',
    '/images/tv.png',
    '/images/tw.png',
    '/images/tz.png',
    '/images/ua.png',
    '/images/ug.png',
    '/images/us.png',
    '/images/uy.png',
    '/images/uz.png',
    '/images/va.png',
    '/images/vc.png',
    '/images/ve.png',
    '/images/vg.png',
    '/images/vi.png',
    '/images/vn.png',
    '/images/vu.png',
    '/images/wf.png',
    '/images/ws.png',
    '/images/xk.png',
    '/images/ye.png',
    '/images/yt.png',
    '/images/za.png',
    '/images/zm.png',
    '/images/zw.png',
];
evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
    })
);
evt.waitUntil(
    caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) {
                console.log('[ServiceWorker] Removing old cache', key);
                return caches.delete(key);
            }
        }));
    })
);