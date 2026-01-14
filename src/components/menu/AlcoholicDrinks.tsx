import React from 'react';
import { MenuItem } from './menu-item';
import { alcoholicDrinkContent } from '../../data/menu-data';

export function AlcoholicDrinks({ heading }: { heading: string }) {
    return (
        <div className="mb-8">
            <h4 className="text-lg font-kanteiryuu mb-4 text-gray-700">{heading}</h4>
            <div className="space-y-8">
                {alcoholicDrinkContent.map((entry, index) => {
                    if (entry.type === 'section') {
                        const { title, items, subsections } = entry.data;

                        return (
                            <div key={`${title}-${index}`}>
                                <h5 className="text-base font-kanteiryuu mb-3 text-gray-800">◎ {title}</h5>

                                {subsections?.map((subsection) => (
                                    <div key={`${title}-${subsection.title}`} className="space-y-3 mb-4 last:mb-0">
                                        <h6 className="text-sm font-kanteiryuu text-gray-800">○ {subsection.title}</h6>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {subsection.items.map((item) => (
                                                <MenuItem
                                                    key={`${title}-${subsection.title}-${item.name}`}
                                                    {...item}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {items && items.length > 0 && (
                                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${subsections ? 'mt-4' : ''}`}>
                                        {items.map((item) => (
                                            <MenuItem key={`${title}-${item.name}`} {...item} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    }

                    return (
                        <div
                            key={`single-${entry.data.name}-${index}`}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            <MenuItem {...entry.data} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
