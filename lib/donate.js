exports.donate = (id, RBSBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *Donasi Ke ${RBSBOT}*
╠════════════════════
║├≽️⚜ *OVO*: _0853-7698-0664_
║├≽️⚜ *PULSA*: _0853-7698-0664_
║├≽️⚜ *GOPAY*: _0853-7698-0664_
╠════════════════════
║  *${RBSBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwa}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${RBSBOT}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *MADE BY RBSBOT*
╚════════════════════`
}

