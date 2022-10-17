const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `cosmic_reaper`
    },
    async execute(interaction,message, client){
        const embed = new EmbedBuilder()
        .setTitle(`코즈믹 리퍼`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAyMDA1MTBfMTc5/MDAxNTg5MDUwNzgxMjE2.9ios3HsrHVa45D7pHoPj1XmzPMs02J_CqtHl2G7ZvaYg.uruGBJ3PWgf0iqR3C0kpV_MlRwucxMJ_5aSFz_Llmwgg.JPEG/BTNCosmicReaper.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n크림슨 리퍼 \n 애증의 검 르반테 \n 죽음의 창두 \n 화염의 결정 \n 폭풍의 결정 \n 빛의 결정 \n 안티 매터`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('crimson_reaper')
        .setLabel(`크림슨 리퍼`)
        .setStyle(ButtonStyle.Secondary);
        const button1 = new ButtonBuilder()
        .setCustomId('divine_slayer')
        .setLabel(`디바인 슬레이어`)
        .setStyle(ButtonStyle.Primary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button,button1)],
            ephemeral: true
            
        });

    }
}