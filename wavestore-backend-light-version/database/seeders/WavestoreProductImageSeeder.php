<?php

namespace Database\Seeders;

use App\Models\product\WavestoreProductImage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WavestoreProductImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $productImages = [
            // guitars
            ['item_ID' => 'LPC79AJSB', 'url' => '/img/items/guitars/epiphone/LPC79AJSB/LPC79AJSB-1.png', 'sort_order' => 0],
            ['item_ID' => 'LPC79AJSB', 'url' => '/img/items/guitars/epiphone/LPC79AJSB/LPC79AJSB-2.png', 'sort_order' => 1],
            ['item_ID' => 'LPC79AJSB', 'url' => '/img/items/guitars/epiphone/LPC79AJSB/LPC79AJSB-3.png', 'sort_order' => 2],
            ['item_ID' => 'LPC79AJSB', 'url' => '/img/items/guitars/epiphone/LPC79AJSB/LPC79AJSB-4.png', 'sort_order' => 3],
            ['item_ID' => 'LPC79AJSB', 'url' => '/img/items/guitars/epiphone/LPC79AJSB/LPC79AJSB-5.png', 'sort_order' => 4],
            // ..
            ['item_ID' => 'Strat70AV254SB', 'url' => '/img/items/guitars/fender/Strat70AV254SB/Strat70AV254SB-1.png', 'sort_order' => 0],
            ['item_ID' => 'Strat70AV254SB', 'url' => '/img/items/guitars/fender/Strat70AV254SB/Strat70AV254SB-2.png', 'sort_order' => 1],
            ['item_ID' => 'Strat70AV254SB', 'url' => '/img/items/guitars/fender/Strat70AV254SB/Strat70AV254SB-3.png', 'sort_order' => 2],
            ['item_ID' => 'Strat70AV254SB', 'url' => '/img/items/guitars/fender/Strat70AV254SB/Strat70AV254SB-4.png', 'sort_order' => 3],
            ['item_ID' => 'Strat70AV254SB', 'url' => '/img/items/guitars/fender/Strat70AV254SB/Strat70AV254SB-5.png', 'sort_order' => 4],
            // ..
            ['item_ID' => 'LPSt60FTBbB', 'url' => '/img/items/guitars/gibson/LPSt60FTBbB/LPSt60FTBbB-1.png', 'sort_order' => 0],
            ['item_ID' => 'LPSt60FTBbB', 'url' => '/img/items/guitars/gibson/LPSt60FTBbB/LPSt60FTBbB-2.png', 'sort_order' => 1],
            ['item_ID' => 'LPSt60FTBbB', 'url' => '/img/items/guitars/gibson/LPSt60FTBbB/LPSt60FTBbB-3.png', 'sort_order' => 2],
            ['item_ID' => 'LPSt60FTBbB', 'url' => '/img/items/guitars/gibson/LPSt60FTBbB/LPSt60FTBbB-4.png', 'sort_order' => 3],
            ['item_ID' => 'LPSt60FTBbB', 'url' => '/img/items/guitars/gibson/LPSt60FTBbB/LPSt60FTBbB-5.png', 'sort_order' => 4],
            // ..
            ['item_ID' => 'RG5320CDFM', 'url' => '/img/items/guitars/ibanez/RG5320CDFM/RG5320CDFM-1.png', 'sort_order' => 0],
            ['item_ID' => 'RG5320CDFM', 'url' => '/img/items/guitars/ibanez/RG5320CDFM/RG5320CDFM-2.png', 'sort_order' => 1],
            ['item_ID' => 'RG5320CDFM', 'url' => '/img/items/guitars/ibanez/RG5320CDFM/RG5320CDFM-3.png', 'sort_order' => 2],
            ['item_ID' => 'RG5320CDFM', 'url' => '/img/items/guitars/ibanez/RG5320CDFM/RG5320CDFM-4.png', 'sort_order' => 3],
            ['item_ID' => 'RG5320CDFM', 'url' => '/img/items/guitars/ibanez/RG5320CDFM/RG5320CDFM-5.png', 'sort_order' => 4],
            // ..
            ['item_ID' => 'JS32KEAVB', 'url' => '/img/items/guitars/jackson/JS32KEAVB/JS32KEAVB-1.webp', 'sort_order' => 0],
            ['item_ID' => 'JS32KEAVB', 'url' => '/img/items/guitars/jackson/JS32KEAVB/JS32KEAVB-2.webp', 'sort_order' => 1],
            ['item_ID' => 'JS32KEAVB', 'url' => '/img/items/guitars/jackson/JS32KEAVB/JS32KEAVB-3.webp', 'sort_order' => 2],
            ['item_ID' => 'JS32KEAVB', 'url' => '/img/items/guitars/jackson/JS32KEAVB/JS32KEAVB-4.webp', 'sort_order' => 3],
            ['item_ID' => 'JS32KEAVB', 'url' => '/img/items/guitars/jackson/JS32KEAVB/JS32KEAVB-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'PAC012DLXVSB', 'url' => '/img/items/guitars/yamaha/PAC012DLXVSB/PAC012DLXVSB-1.png', 'sort_order' => 0],
            ['item_ID' => 'PAC012DLXVSB', 'url' => '/img/items/guitars/yamaha/PAC012DLXVSB/PAC012DLXVSB-2.png', 'sort_order' => 1],
            ['item_ID' => 'PAC012DLXVSB', 'url' => '/img/items/guitars/yamaha/PAC012DLXVSB/PAC012DLXVSB-3.png', 'sort_order' => 2],
            ['item_ID' => 'PAC012DLXVSB', 'url' => '/img/items/guitars/yamaha/PAC012DLXVSB/PAC012DLXVSB-4.png', 'sort_order' => 3],
            ['item_ID' => 'PAC012DLXVSB', 'url' => '/img/items/guitars/yamaha/PAC012DLXVSB/PAC012DLXVSB-5.png', 'sort_order' => 4],
            // bass
            ['item_ID' => 'JBassVP2MAOP', 'url' => '/img/items/bass/fender/JBassVP2MAOP/JBassVP2MAOP-1.webp', 'sort_order' => 0],
            ['item_ID' => 'JBassVP2MAOP', 'url' => '/img/items/bass/fender/JBassVP2MAOP/JBassVP2MAOP-2.webp', 'sort_order' => 1],
            ['item_ID' => 'JBassVP2MAOP', 'url' => '/img/items/bass/fender/JBassVP2MAOP/JBassVP2MAOP-3.webp', 'sort_order' => 2],
            ['item_ID' => 'JBassVP2MAOP', 'url' => '/img/items/bass/fender/JBassVP2MAOP/JBassVP2MAOP-4.webp', 'sort_order' => 3],
            ['item_ID' => 'JBassVP2MAOP', 'url' => '/img/items/bass/fender/JBassVP2MAOP/JBassVP2MAOP-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'RMBlondieSt', 'url' => '/img/items/bass/fodera/RMBlondieSt/RMBlondieSt-1.webp', 'sort_order' => 0],
            ['item_ID' => 'RMBlondieSt', 'url' => '/img/items/bass/fodera/RMBlondieSt/RMBlondieSt-2.webp', 'sort_order' => 1],
            ['item_ID' => 'RMBlondieSt', 'url' => '/img/items/bass/fodera/RMBlondieSt/RMBlondieSt-3.webp', 'sort_order' => 2],
            ['item_ID' => 'RMBlondieSt', 'url' => '/img/items/bass/fodera/RMBlondieSt/RMBlondieSt-4.webp', 'sort_order' => 3],
            ['item_ID' => 'RMBlondieSt', 'url' => '/img/items/bass/fodera/RMBlondieSt/RMBlondieSt-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'SR375EFBBT', 'url' => '/img/items/bass/ibanez/SR375EFBBT/SR375EFBBT-1.webp', 'sort_order' => 0],
            ['item_ID' => 'SR375EFBBT', 'url' => '/img/items/bass/ibanez/SR375EFBBT/SR375EFBBT-2.webp', 'sort_order' => 1],
            ['item_ID' => 'SR375EFBBT', 'url' => '/img/items/bass/ibanez/SR375EFBBT/SR375EFBBT-3.webp', 'sort_order' => 2],
            ['item_ID' => 'SR375EFBBT', 'url' => '/img/items/bass/ibanez/SR375EFBBT/SR375EFBBT-4.webp', 'sort_order' => 3],
            ['item_ID' => 'SR375EFBBT', 'url' => '/img/items/bass/ibanez/SR375EFBBT/SR375EFBBT-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'MEHPJ5MpFBSS', 'url' => '/img/items/bass/sadowsky/MEHPJ5MpFBSS/MEHPJ5MpFBSS-1.webp', 'sort_order' => 0],
            ['item_ID' => 'MEHPJ5MpFBSS', 'url' => '/img/items/bass/sadowsky/MEHPJ5MpFBSS/MEHPJ5MpFBSS-2.webp', 'sort_order' => 1],
            ['item_ID' => 'MEHPJ5MpFBSS', 'url' => '/img/items/bass/sadowsky/MEHPJ5MpFBSS/MEHPJ5MpFBSS-3.webp', 'sort_order' => 2],
            ['item_ID' => 'MEHPJ5MpFBSS', 'url' => '/img/items/bass/sadowsky/MEHPJ5MpFBSS/MEHPJ5MpFBSS-4.webp', 'sort_order' => 3],
            ['item_ID' => 'MEHPJ5MpFBSS', 'url' => '/img/items/bass/sadowsky/MEHPJ5MpFBSS/MEHPJ5MpFBSS-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'ThumbBO5BR', 'url' => '/img/items/bass/warwick/ThumbBO5BR/ThumbBO5BR-1.webp', 'sort_order' => 0],
            ['item_ID' => 'ThumbBO5BR', 'url' => '/img/items/bass/warwick/ThumbBO5BR/ThumbBO5BR-2.webp', 'sort_order' => 1],
            ['item_ID' => 'ThumbBO5BR', 'url' => '/img/items/bass/warwick/ThumbBO5BR/ThumbBO5BR-3.webp', 'sort_order' => 2],
            ['item_ID' => 'ThumbBO5BR', 'url' => '/img/items/bass/warwick/ThumbBO5BR/ThumbBO5BR-4.webp', 'sort_order' => 3],
            ['item_ID' => 'ThumbBO5BR', 'url' => '/img/items/bass/warwick/ThumbBO5BR/ThumbBO5BR-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'TRBX505BRB', 'url' => '/img/items/bass/yamaha/TRBX505BRB/TRBX505BRB-1.webp', 'sort_order' => 0],
            ['item_ID' => 'TRBX505BRB', 'url' => '/img/items/bass/yamaha/TRBX505BRB/TRBX505BRB-2.webp', 'sort_order' => 1],
            ['item_ID' => 'TRBX505BRB', 'url' => '/img/items/bass/yamaha/TRBX505BRB/TRBX505BRB-3.webp', 'sort_order' => 2],
            ['item_ID' => 'TRBX505BRB', 'url' => '/img/items/bass/yamaha/TRBX505BRB/TRBX505BRB-4.webp', 'sort_order' => 3],
            ['item_ID' => 'TRBX505BRB', 'url' => '/img/items/bass/yamaha/TRBX505BRB/TRBX505BRB-5.webp', 'sort_order' => 4],
            // drums
            ['item_ID' => 'PSK422BD', 'url' => '/img/items/drums/DW/PSK422BD/PSK422BD-1.webp', 'sort_order' => 0],
            ['item_ID' => 'PSK422BD', 'url' => '/img/items/drums/DW/PSK422BD/PSK422BD-2.webp', 'sort_order' => 1],
            ['item_ID' => 'PSK422BD', 'url' => '/img/items/drums/DW/PSK422BD/PSK422BD-3.webp', 'sort_order' => 2],
            ['item_ID' => 'PSK422BD', 'url' => '/img/items/drums/DW/PSK422BD/PSK422BD-4.webp', 'sort_order' => 3],
            ['item_ID' => 'PSK422BD', 'url' => '/img/items/drums/DW/PSK422BD/PSK422BD-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'SR628XUZXN', 'url' => '/img/items/drums/mapex/SR628XUZXN/SR628XUZXN-1.webp', 'sort_order' => 0],
            ['item_ID' => 'SR628XUZXN', 'url' => '/img/items/drums/mapex/SR628XUZXN/SR628XUZXN-2.webp', 'sort_order' => 1],
            ['item_ID' => 'SR628XUZXN', 'url' => '/img/items/drums/mapex/SR628XUZXN/SR628XUZXN-3.webp', 'sort_order' => 2],
            ['item_ID' => 'SR628XUZXN', 'url' => '/img/items/drums/mapex/SR628XUZXN/SR628XUZXN-4.webp', 'sort_order' => 3],
            ['item_ID' => 'SR628XUZXN', 'url' => '/img/items/drums/mapex/SR628XUZXN/SR628XUZXN-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'RS525SC-ABG', 'url' => '/img/items/drums/pearl/RS525SC-ABG/RS525SC-ABG-1.webp', 'sort_order' => 0],
            ['item_ID' => 'RS525SC-ABG', 'url' => '/img/items/drums/pearl/RS525SC-ABG/RS525SC-ABG-2.webp', 'sort_order' => 1],
            ['item_ID' => 'RS525SC-ABG', 'url' => '/img/items/drums/pearl/RS525SC-ABG/RS525SC-ABG-3.webp', 'sort_order' => 2],
            ['item_ID' => 'RS525SC-ABG', 'url' => '/img/items/drums/pearl/RS525SC-ABG/RS525SC-ABG-4.webp', 'sort_order' => 3],
            ['item_ID' => 'RS525SC-ABG', 'url' => '/img/items/drums/pearl/RS525SC-ABG/RS525SC-ABG-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'AQ1StagePW', 'url' => '/img/items/drums/sonor/AQ1StagePW/AQ1StagePW-1.webp', 'sort_order' => 0],
            ['item_ID' => 'AQ1StagePW', 'url' => '/img/items/drums/sonor/AQ1StagePW/AQ1StagePW-2.webp', 'sort_order' => 1],
            ['item_ID' => 'AQ1StagePW', 'url' => '/img/items/drums/sonor/AQ1StagePW/AQ1StagePW-3.webp', 'sort_order' => 2],
            ['item_ID' => 'AQ1StagePW', 'url' => '/img/items/drums/sonor/AQ1StagePW/AQ1StagePW-4.webp', 'sort_order' => 3],
            ['item_ID' => 'AQ1StagePW', 'url' => '/img/items/drums/sonor/AQ1StagePW/AQ1StagePW-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'SBP8F3NW', 'url' => '/img/items/drums/yamaha/SBP8F3NW/SBP8F3NW-1.webp', 'sort_order' => 0],
            ['item_ID' => 'SBP8F3NW', 'url' => '/img/items/drums/yamaha/SBP8F3NW/SBP8F3NW-2.webp', 'sort_order' => 1],
            ['item_ID' => 'SBP8F3NW', 'url' => '/img/items/drums/yamaha/SBP8F3NW/SBP8F3NW-3.webp', 'sort_order' => 2],
            ['item_ID' => 'SBP8F3NW', 'url' => '/img/items/drums/yamaha/SBP8F3NW/SBP8F3NW-4.webp', 'sort_order' => 3],
            ['item_ID' => 'SBP8F3NW', 'url' => '/img/items/drums/yamaha/SBP8F3NW/SBP8F3NW-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'CL72SDIB', 'url' => '/img/items/drums/tama/CL72SDIB/CL72SDIB-1.webp', 'sort_order' => 0],
            ['item_ID' => 'CL72SDIB', 'url' => '/img/items/drums/tama/CL72SDIB/CL72SDIB-2.webp', 'sort_order' => 1],
            ['item_ID' => 'CL72SDIB', 'url' => '/img/items/drums/tama/CL72SDIB/CL72SDIB-3.webp', 'sort_order' => 2],
            ['item_ID' => 'CL72SDIB', 'url' => '/img/items/drums/tama/CL72SDIB/CL72SDIB-4.webp', 'sort_order' => 3],
            ['item_ID' => 'CL72SDIB', 'url' => '/img/items/drums/tama/CL72SDIB/CL72SDIB-5.webp', 'sort_order' => 4],
            // accesories
            ['item_ID' => 'STCsMDlxBG', 'url' => '/img/items/accesories/guitar-case/STCsMDlxBG/STCsMDlxBG-1.webp', 'sort_order' => 0],
            ['item_ID' => 'STCsMDlxBG', 'url' => '/img/items/accesories/guitar-case/STCsMDlxBG/STCsMDlxBG-2.webp', 'sort_order' => 1],
            ['item_ID' => 'STCsMDlxBG', 'url' => '/img/items/accesories/guitar-case/STCsMDlxBG/STCsMDlxBG-3.webp', 'sort_order' => 2],
            ['item_ID' => 'STCsMDlxBG', 'url' => '/img/items/accesories/guitar-case/STCsMDlxBG/STCsMDlxBG-4.webp', 'sort_order' => 3],
            ['item_ID' => 'STCsMDlxBG', 'url' => '/img/items/accesories/guitar-case/STCsMDlxBG/STCsMDlxBG-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'GX10', 'url' => '/img/items/accesories/guitar-fx-pedal/GX10/GX10-1.webp', 'sort_order' => 0],
            ['item_ID' => 'GX10', 'url' => '/img/items/accesories/guitar-fx-pedal/GX10/GX10-2.webp', 'sort_order' => 1],
            ['item_ID' => 'GX10', 'url' => '/img/items/accesories/guitar-fx-pedal/GX10/GX10-3.webp', 'sort_order' => 2],
            ['item_ID' => 'GX10', 'url' => '/img/items/accesories/guitar-fx-pedal/GX10/GX10-4.webp', 'sort_order' => 3],
            ['item_ID' => 'GX10', 'url' => '/img/items/accesories/guitar-fx-pedal/GX10/GX10-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'GS525B', 'url' => '/img/items/accesories/guitar-stand/GS525B/GS525B-1.webp', 'sort_order' => 0],
            ['item_ID' => 'GS525B', 'url' => '/img/items/accesories/guitar-stand/GS525B/GS525B-2.webp', 'sort_order' => 1],
            ['item_ID' => 'GS525B', 'url' => '/img/items/accesories/guitar-stand/GS525B/GS525B-3.webp', 'sort_order' => 2],
            ['item_ID' => 'GS525B', 'url' => '/img/items/accesories/guitar-stand/GS525B/GS525B-4.webp', 'sort_order' => 3],
            ['item_ID' => 'GS525B', 'url' => '/img/items/accesories/guitar-stand/GS525B/GS525B-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => '74T000', 'url' => '/img/items/accesories/guitar-strap/74T000/74T000-1.webp', 'sort_order' => 0],
            ['item_ID' => '74T000', 'url' => '/img/items/accesories/guitar-strap/74T000/74T000-2.webp', 'sort_order' => 1],
            ['item_ID' => '74T000', 'url' => '/img/items/accesories/guitar-strap/74T000/74T000-3.webp', 'sort_order' => 2],
            ['item_ID' => '74T000', 'url' => '/img/items/accesories/guitar-strap/74T000/74T000-4.webp', 'sort_order' => 3],
            ['item_ID' => '74T000', 'url' => '/img/items/accesories/guitar-strap/74T000/74T000-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'NT1SigBlk', 'url' => '/img/items/accesories/microphone-condenser/NT1SigBlk/NT1SigBlk-1.webp', 'sort_order' => 0],
            ['item_ID' => 'NT1SigBlk', 'url' => '/img/items/accesories/microphone-condenser/NT1SigBlk/NT1SigBlk-2.webp', 'sort_order' => 1],
            ['item_ID' => 'NT1SigBlk', 'url' => '/img/items/accesories/microphone-condenser/NT1SigBlk/NT1SigBlk-3.webp', 'sort_order' => 2],
            ['item_ID' => 'NT1SigBlk', 'url' => '/img/items/accesories/microphone-condenser/NT1SigBlk/NT1SigBlk-4.webp', 'sort_order' => 3],
            ['item_ID' => 'NT1SigBlk', 'url' => '/img/items/accesories/microphone-condenser/NT1SigBlk/NT1SigBlk-5.webp', 'sort_order' => 4],
            // ..
            ['item_ID' => 'StroboClipHD', 'url' => '/img/items/accesories/tuner/StroboClipHD/StroboClipHD-1.webp', 'sort_order' => 0],
            ['item_ID' => 'StroboClipHD', 'url' => '/img/items/accesories/tuner/StroboClipHD/StroboClipHD-2.webp', 'sort_order' => 1],
            ['item_ID' => 'StroboClipHD', 'url' => '/img/items/accesories/tuner/StroboClipHD/StroboClipHD-3.webp', 'sort_order' => 2],
            ['item_ID' => 'StroboClipHD', 'url' => '/img/items/accesories/tuner/StroboClipHD/StroboClipHD-4.webp', 'sort_order' => 3],
            ['item_ID' => 'StroboClipHD', 'url' => '/img/items/accesories/tuner/StroboClipHD/StroboClipHD-5.webp', 'sort_order' => 4],
        ];

        foreach ($productImages as $productImage) {
            WavestoreProductImage::create($productImage);
        }
    }
}
