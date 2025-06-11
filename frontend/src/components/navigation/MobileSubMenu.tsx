import React from 'react';
import WayfairTextLogo from "@/assets/icons/wayfairTextLogo.svg?react"

interface Department {
  id: string;
  name: string;
  icon: string; // We'll use emoji for simplicity
}

const departments: Department[] = [
  { id: 'furniture', name: 'Furniture', icon: '🪑' },
  { id: 'outdoor', name: 'Outdoor', icon: '🏕️' },
  { id: 'bedding', name: 'Bedding & Bath', icon: '🛏️' },
  { id: 'rugs', name: 'Rugs', icon: '🟫' },
  { id: 'decor', name: 'Decor & Pillows', icon: '🛋️' },
  { id: 'lighting', name: 'Lighting', icon: '💡' },
  { id: 'kitchen', name: 'Kitchen & Dining', icon: '🍽️' },
  { id: 'storage', name: 'Storage & Organization', icon: '📦' },
  { id: 'baby', name: 'Baby & Kids', icon: '🧸' },
  { id: 'holiday', name: 'Holiday Decor', icon: '🎄' },
];

// Menu component props
interface MobileSubMenuProps {
  onClose: () => void;
  departments?: Department[]
}

const MobileSubMenu: React.FC<MobileSubMenuProps> = ({ 
  onClose, 
  departments: customDepartments = departments 
}) => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-1 border-b border-gray-200">
        <div className="flex items-center">
          <button
            onClick={onClose}
            className="p-1 px-3 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a href="/" className="w-[160px] h-[45px] block px-2">
            <WayfairTextLogo />
          </a>
        </div>
      </div>

      {/* Menu Content */}
      <div className="flex-1">
        <div className="px-4 py-2">
          <div className="flex items-center py-3 hover:bg-gray-50 rounded-lg px-2 cursor-pointer transition-colors">
            <svg className="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-gray-700 font-medium">Lists</span>
          </div>

          <div className="flex items-center py-3 hover:bg-gray-50 rounded-lg px-2 cursor-pointer transition-colors">
            <svg className="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="text-gray-700 font-medium">My Orders</span>
          </div>
        </div>

        {/* Departments Section */}
        <div className="px-4 py-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Departments</h2>
          
          <div className="space-y-1">
            {customDepartments.map((department) => (
              <div
                key={department.id}
                className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center mr-3 text-xl">
                    {department.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{department.name}</span>
                </div>
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Sign In Button */}
      <div className="p-4 border-t border-gray-100">
        <button className="w-full bg-purple-100 hover:bg-purple-200 text-white font-semibold py-3 px-4 rounded-full transition-colors">
          Sign In
        </button>
      </div>
    </div>
  )
}

export default MobileSubMenu