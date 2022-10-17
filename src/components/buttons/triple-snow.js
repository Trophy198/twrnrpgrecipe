const { SlashCommandBuilder, EmbedBuilder, Embed, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder,ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: {
        name: `triple_snow`
    },
    async execute(interaction, client){
        const embed = new EmbedBuilder()
        .setTitle(`트리플 스노우`)
        .setColor(0x18e1ee)
        .setThumbnail('https://cafeptthumb-phinf.pstatic.net/MjAxODA0MTBfOSAg/MDAxNTIzMjg5MDU1NjUz.TknaAIEJgu2QQlegvPKAfqjvoqWCG-LV8Q9lNvL6hrwg.okR0whbjgxzkaxQ8oPmmL9NXULEBg-YyMlHZzH8KojQg.JPEG.darkprank/BTNinv_staff_95.jpg?type=w740')
        .addFields([
            {
                name: `조합법`,
                value: `\n\n트윈 스노우 \n 드래고닉 오브 \n 한기의 조각 \n 마나 오브`,
                inline: true
            }
        ]);
        const button = new ButtonBuilder()
        .setCustomId('endless_snow')
        .setLabel(`엔드리스 스노우`)
        .setStyle(ButtonStyle.Primary);
        await interaction.update({
            embeds: [embed],
            components: [new ActionRowBuilder().addComponents(button)],
            ephemeral: true
            
        });
        
    }
}