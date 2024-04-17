'use client'
import { useState } from 'react'
import { Switch } from '@headlessui/react'



const PriceTable = () => {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex gap-6">
                <span>
                    <h2 className="text-[1.5rem]"> Colored Pencil </h2>
                </span>

                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-[#000000]' : 'bg-[#e93e68]'
                        } relative inline-flex h-8 w-[100px] items-center rounded-full`}
                >
                    <span className="sr-only">Enable notifications</span>
                    <span
                        className={`${enabled ? 'translate-x-[72px]' : 'translate-x-1'
                            } inline-block h-6 w-6 transform rounded-full bg-white transition`}
                    />
                </Switch>
                <span>
                    <h2 className="text-[1.5rem]"> Graphite </h2>
                </span>
            </div>
            <table className="w-[600px] h-[400px] border border-1 border-[#000] mt-6 text-[1.2rem] bg-[#e9e9e9] opacity-100">
                <tr className="border border-1 border-[#000]">
                    <th className="border-r border-r-1 border-[#000] bg-[#e93e68] text-white">Sizes</th>
                    <th className="border-r border-r-1 border-[#000] bg-[#e93e68] text-white">Pets*</th>
                    <th className="border-r border-r-1 border-[#000] bg-[#e93e68] text-white">People*</th>
                </tr>
                <tr>
                    <td className="text-center border-r border-r-1 border-[#000]">5x7</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$190</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$210</td>
                </tr>
                <tr>
                    <td className="text-center border-r border-r-1 border-[#000]">8x10</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$360</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$390</td>
                </tr>
                <tr>
                    <td className="text-center border-r border-r-1 border-[#000]">9x12</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$430</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$460</td>
                </tr>
                <tr>
                    <td className="text-center border-r border-r-1 border-[#000]">11x14</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$520</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$570</td>
                </tr>
                <tr>
                    <td className="text-center border-r border-r-1 border-[#000]">12x16</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$650</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$720</td>
                </tr>
                <tr>
                    <td className="text-center border-r border-r-1 border-[#000]">16x20</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$850</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$930</td>
                </tr>
                <tr>
                    <td className="text-center border-r border-r-1 border-[#000]">18x24</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$1090</td>
                    <td className="text-center border-r border-r-1 border-[#000]">$1220</td>
                </tr>
            </table>
        </div>
    )
}


export default PriceTable

